import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MarketingStatus } from './MarketingStatus'
import { PackagedProductDefinition_BatchIdentifier } from './PackagedProductDefinition_BatchIdentifier'
import { PackagedProductDefinition_Package } from './PackagedProductDefinition_Package'
import { Reference } from './Reference'

export class PackagedProductDefinition      extends DomainResource
{

   static def : string = 'PackagedProductDefinition';
   identifier : Identifier [];
   subject : Reference [];
   description : string ;
   legalStatusOfSupply : CodeableConcept ;
   marketingStatus : MarketingStatus [];
   marketingAuthorization : Reference ;
   manufacturer : Reference [];
   batchIdentifier : PackagedProductDefinition_BatchIdentifier [];
   package : PackagedProductDefinition_Package [];
}
