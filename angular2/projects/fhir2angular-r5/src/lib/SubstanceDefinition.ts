import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { SubstanceDefinition_Code } from './SubstanceDefinition_Code'
import { SubstanceDefinition_Moiety } from './SubstanceDefinition_Moiety'
import { SubstanceDefinition_MolecularWeight } from './SubstanceDefinition_MolecularWeight'
import { SubstanceDefinition_Name } from './SubstanceDefinition_Name'
import { SubstanceDefinition_Property } from './SubstanceDefinition_Property'
import { SubstanceDefinition_Relationship } from './SubstanceDefinition_Relationship'
import { SubstanceDefinition_Structure } from './SubstanceDefinition_Structure'

export class SubstanceDefinition      extends DomainResource
{

   static def : string = 'SubstanceDefinition';
   identifier : Identifier ;
   type : CodeableConcept ;
   status : CodeableConcept ;
   domain : CodeableConcept ;
   description : string ;
   source : Reference [];
   comment : string ;
   moiety : SubstanceDefinition_Moiety [];
   property : SubstanceDefinition_Property [];
   referenceInformation : Reference ;
   structure : SubstanceDefinition_Structure ;
   code : SubstanceDefinition_Code [];
   name : SubstanceDefinition_Name [];
   molecularWeight : SubstanceDefinition_MolecularWeight [];
   relationship : SubstanceDefinition_Relationship [];
   nucleicAcid : Reference ;
   polymer : Reference ;
   protein : Reference ;
   sourceMaterial : Reference ;
}
