import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Range } from './Range'

export class FamilyMemberHistory_Procedure      extends BackboneElement
{

   static def : string = 'FamilyMemberHistory_Procedure';
   code : CodeableConcept ;
   outcome : CodeableConcept ;
   contributedToDeath : boolean ;
   performedAge : string ;
   performedRange : Range ;
   performedPeriod : Period ;
   performedString : string ;
   performedDateTime : string ;
   note : Annotation [];
}
