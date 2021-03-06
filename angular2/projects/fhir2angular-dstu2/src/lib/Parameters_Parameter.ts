import { Address } from './Address'
import { Annotation } from './Annotation'
import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { ElementDefinition } from './ElementDefinition'
import { HumanName } from './HumanName'
import { Identifier } from './Identifier'
import { Meta } from './Meta'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Ratio } from './Ratio'
import { Reference } from './Reference'
import { SampledData } from './SampledData'
import { Signature } from './Signature'
import { Timing } from './Timing'

export class Parameters_Parameter      extends BackboneElement
{

   static def : string = 'Parameters_Parameter';
   name : string ;
   valueBoolean : boolean ;
   valueInteger : string ;
   valueDecimal : string ;
   valueBase64Binary : string ;
   valueInstant : string ;
   valueString : string ;
   valueUri : string ;
   valueDate : string ;
   valueDateTime : string ;
   valueTime : string ;
   valueCode : string ;
   valueOid : string ;
   valueUuid : string ;
   valueId : string ;
   valueUnsignedInt : string ;
   valuePositiveInt : string ;
   valueMarkdown : string ;
   valueAnnotation : Annotation ;
   valueAttachment : Attachment ;
   valueIdentifier : Identifier ;
   valueCodeableConcept : CodeableConcept ;
   valueCoding : Coding ;
   valueQuantity : Quantity ;
   valueRange : Range ;
   valuePeriod : Period ;
   valueRatio : Ratio ;
   valueReference : Reference ;
   valueSampledData : SampledData ;
   valueSignature : Signature ;
   valueHumanName : HumanName ;
   valueAddress : Address ;
   valueContactPoint : ContactPoint ;
   valueTiming : Timing ;
   valueMeta : Meta ;
   valueElementDefinition : ElementDefinition ;
   resource : DomainResource ;
   part : Parameters_Parameter [];
}
